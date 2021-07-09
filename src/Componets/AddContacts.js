import { } from "react-bootstrap";


const AddContacts = () => {
    return (
        <div className="pageBG">
            <div className="loginContainer">
                <div className=" login">
                    <form>
                    <div className='col-sm-12  p-2   text-center'>ADD CONTACTS</div>
                        <div className='col-sm-12  p-2'>
                            <div className='from-group '>
                                <input type='text' className="form-control " placeholder='Name' />
                            </div>
                        </div>
                        <div className='col-sm-12 mb-2 p-2'>
                            <div className='from-group '>
                                <input type='text' className="form-control " placeholder='Email' />
                            </div>
                        </div>
                        <div className='col-md-12 p-2'>
                        <div className='from-group btnGrp'>
                            <input type='submit' className="form-control primary btnLogin"  value="ADD"  ></input>
                        </div>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
export default AddContacts;