import React from 'react';
import {Link} from 'react-router-dom';

import './confirm-code.css';

const ConfirmCode = () => {
    return (
        <div className="confirm-code">
            <form>
                <input type="text" placeholder="Confirmation code" />
                <Link to='/'><button type="button" className="btn-submit">Submit</button></Link>
            </form>
        </div>
    );
}

export default ConfirmCode;