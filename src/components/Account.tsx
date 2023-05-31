import { User } from "phosphor-react";

const Account = ({toggleSidebar}) => {
    return <div onClick={toggleSidebar}>
        <User size={32} />
    </div>;
}

export default Account