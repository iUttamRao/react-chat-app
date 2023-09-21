import { createBrowserRouter } from "react-router-dom";
import { CHAT, DEFAULT } from "./keys";
import {Chat, User} from "../pages";

const router  = createBrowserRouter([
    {
        path:DEFAULT,
        element:<User />
    },
    {
        path:CHAT,
        element:<Chat />
    }
])

export default router;