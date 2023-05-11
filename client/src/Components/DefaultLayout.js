export default function DefaultLayout(props){
    return(
        <div>
            <div className="header box1">
                <div className="d-flex justify-content-between">
                 <h1>SheyCars</h1>
                 
                </div>
            </div>
            <div className="content">
             {props.children}
            </div>
        </div>
    )
}