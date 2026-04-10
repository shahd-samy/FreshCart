import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ rating }) {

    const fullStars = Math.floor(rating);
    const decimalNumber = Number((rating - fullStars).toFixed(1));
    const emptyStars = 5 - Math.round(rating);

    function getStarIcon(idx) {
        if (idx <= fullStars) return faStar;
        else if (decimalNumber >= 0.5 && idx < (5 - emptyStars) + 1) return faStarHalfStroke;
        else return regular;
    }


    return (
        <>
            <ul className="flex *:text-sm">
                {
                    [1, 2, 3, 4, 5].map((idx) =>
                        <li key={idx}><FontAwesomeIcon icon={getStarIcon(idx)} className="text-amber-300" /></li>

                    )

                }


            </ul>
        </>
    )
}
