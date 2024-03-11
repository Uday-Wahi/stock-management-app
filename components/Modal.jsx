"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// This is a data object that will be used to store the data of the card that is clicked
export const dataObject = {
  _slug: "",
  // Getter and setter for the slug
  get slug() {
    return this._slug;
  },
  set slug(value) {
    this._slug = value;
  },
  _quantity: 0,
  // Getter and setter for the quantity
  get quantity() {
    return this._quantity;
  },
  set quantity(value) {
    this._quantity = value;
  },
  _price: 0,
  // Getter and setter for the price
  get price() {
    return this._price;
  },
  set price(value) {
    this._price = value;
  },
};

const Modal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showModal = searchParams.get("showModal");
  const modalRef = useRef(null);

  // This state will store the data of the card that is clicked
  const [modalData, setModalData] = useState({
    slug: dataObject.slug,
    quantity: dataObject.quantity,
    price: dataObject.price,
  });

  // Destructuring the modalData
  const { slug, quantity, price } = modalData;

  // This useEffect will run when the showModal state changes
  useEffect(() => {
    // If the showModal is true, then show the modal
    showModal ? modalRef.current.showModal() : null;
    // dispatch the setModalData action to set the data of the card that is clicked
    setModalData({
      slug: dataObject.slug,
      quantity: dataObject.quantity,
      price: dataObject.price,
    });
  }, [showModal, dataObject.slug, dataObject.quantity, dataObject.price]);

  const handleUpdate = () => {
    // Dispatch an action to update the card
    modalRef.current.close();
    router.back();
  };

  const handleDelete = () => {
    // Dispatch an action to delete the card
    modalRef.current.close();
    router.back();
  };

  return (
    showModal && (
      <dialog
        ref={modalRef}
        className="fixed z-10 top-30 left-30 backdrop:bg-gray-800/50"
      >
        <div className="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {slug}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Quantity: {quantity}
                    </p>
                    <p className="text-sm text-gray-500">Price: {price}</p>
                  </div>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-10 sm:flex sm:flex-row">
                  <button
                    type="button"
                    className="w-8 h-8 plus"
                    onClick={() => {}}
                  >
                    <Image src="plus.svg" alt="plus" width={32} height={32} />
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 minus"
                    onClick={() => {}}
                  >
                    <Image src="minus.svg" alt="plus" width={32} height={32} />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
              <button
                type="button"
                className="w-8 h-8 mx-2"
                onClick={handleUpdate}
              >
                <Image
                  src="updateIcon.svg"
                  alt="Update"
                  width={24}
                  height={24}
                />
              </button>
              <button
                type="button"
                className="w-8 h-8 mx-2"
                onClick={handleDelete}
              >
                <Image
                  src="deleteIcon.svg"
                  alt="Delete"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    )
  );
};

export default Modal;
