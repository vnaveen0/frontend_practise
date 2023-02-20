import PromoHeading from "./PromoHeading";

function Promo() {
    const data = {
        heading: "99% of all items!",
        calltoAction: "Everything must go!"
    }
    
    return(
        <div>
            <PromoHeading heading={data.heading} calltoAction={data.calltoAction} 
            />
        </div>
    )
}


export default Promo;