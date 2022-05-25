import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const AddNewTools = () => {

    const { handleSubmit } = useForm();


    ///const { data } = useQuery('tools', ()=>fetch().then(res=>res.json()))


    const onSubmit = async data => {
        console.log(data, "data");

    }
    return (
        <div>
            <h2 className='text-xl font-bold text-green-500'> Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tools Name</span>
                    </label>
                    <input
                        type="text" placeholder="Tools Name"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text" placeholder="Price"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order:</span>
                    </label>
                    <input
                        type="text" placeholder="Minimum Order:"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Stocks:</span>
                    </label>
                    <input
                        type="text" placeholder="Stocks:"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" />

                </div>


                <input className='btn btn-info w-full max-w-xs' type="submit" value={"Add Tools"} />
            </form>
        </div>
    );

}

export default AddNewTools;