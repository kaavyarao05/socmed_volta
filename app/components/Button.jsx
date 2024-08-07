import React from "react";
import Link from "node_modules/next/link";

const Button = ({text,link}) => {
return (
<Link href={""+link} prefetch = {true}>
<button className="bg-white hover:bg-orange-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
{text}
</button>
</Link>
);
};
export default Button;