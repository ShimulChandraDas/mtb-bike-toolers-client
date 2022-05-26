import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddNewTools = () => {

    const { handleSubmit, register, reset } = useForm();


    const imgStorageKey = '738cbae770b63530cd1bf9a7d0c10103';

    ///const { data } = useQuery('tools', ()=>fetch().then(res=>res.json()))


    const onSubmit = async data => {
        console.log(data, 'onsubmit dada');
        const image = data?.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const iUrl = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(iUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(iData => {
                if (iData.success) {
                    const img = iData.data.display_url;
                    const tools = {
                        name: data.name,
                        price: data.price,
                        minOrder: data.minOrder,
                        stocks: data.stocks,
                        description: data.description,
                        img: img

                    }
                    //
                    fetch(`https://aqueous-shore-65518.herokuapp.com/tools`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted)
                            if (inserted.insertedId) {
                                toast.success('Successfully added a product ')
                                reset();
                            } else {
                                toast.error('Failed to added a product ')
                            }
                        })
                }
                console.log('img BB', iData);
            })



    }
    return (
        <div>
            <h2 className='text-xl text-center font-bold text-green-500'> Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tools Name</span>
                    </label>
                    <input {...register('name')}
                        type="text" placeholder="Tools Name"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input {...register('price')}
                        type="number" placeholder="Price"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order:</span>
                    </label>
                    <input {...register('minOrder')}
                        type="number" placeholder="Minimum Order:"
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Stocks:</span>
                    </label>
                    <input {...register('stocks')}
                        type="number" placeholder="Stocks:"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description:</span>
                    </label>
                    <textarea {...register('description')}
                        type="text-area" placeholder="Stocks:"
                        className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register('image')} type="file" />
                </div>


                <input className='btn btn-info w-full max-w-xs' type="submit" value={"Add Tools"} />
            </form>
        </div>
    );

}

export default AddNewTools;