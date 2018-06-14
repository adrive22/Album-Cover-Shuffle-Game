//method/component for getting accessing the children property and inputing it into the html

import React from "react";

const Wrapper = props => <div className="wrappper">{props.children}</div>;

export default Wrapper;