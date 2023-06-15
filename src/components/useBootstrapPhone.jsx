import React, { useState } from 'react';
import BootstrapPhone from './BootstrapPhone';

const BootstrapPhoneInput = ({ value, onChange, ...restProps }) => {

    const [phone, setPhone] = useState('');

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="row">
                    <div className="col justify-content-center align-items-center">

                        <BootstrapPhone
                            defaultCountry="bd"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootstrapPhoneInput;



