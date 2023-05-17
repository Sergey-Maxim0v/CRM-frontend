import SVG_TYPES from "../../enums/svg-types";
import {FC} from "react";
import {IComponentsSVG} from "./types";

const ComponentsSVG: FC<IComponentsSVG> = ({type, className}) => {
    switch (type) {
        case SVG_TYPES.add:
            return (
                <svg className={className} width="23" height="16" viewBox="0 0 23 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z"
                        fill="currentColor"/>
                </svg>
            )
        case SVG_TYPES.close:
            return (
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z"
                          fill="currentColor"/>
                </svg>

            )
    }
}

export default ComponentsSVG