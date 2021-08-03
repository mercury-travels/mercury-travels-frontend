import React from "react";

const MiceItem = ({subtitle, description}) => {
    return (
        <div className="mice-item">
            <div className="mice-item-left">
                <span className="subtitle mice-item-left__subtitle">
                    {subtitle}
                </span>
            </div>
            <div className="mice-item-right">
                <p className="description mice-item-right__description">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default MiceItem;
