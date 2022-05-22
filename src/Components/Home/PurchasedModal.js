import React from 'react';

const PurchasedModal = ({ purchased }) => {
    const { name } = purchased;
    return (
        <div>
            <input type="checkbox" id="purchased-modal" class="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchased-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg">{name}</h3>
                    <form >
                        <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    </form>



                    <div className="modal-action">
                        <label for="purchased-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasedModal;