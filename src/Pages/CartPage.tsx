
interface IProps { }

const CartPage = () => {
    return (
        <div className="overflow-x-auto border">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th >Title</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            Zemlak, Daniel and Leannon
                        </td>

                        <td>$ 5000</td>
                        <th>
                            <button className="btn btn-primary btn-xs">details</button>
                        </th>

                    </tr>

                </tbody>
                {/* foot */}

            </table>
        </div>)
}

export default CartPage