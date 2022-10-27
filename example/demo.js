import Request from "./index";

const fetchData = async () => {
    const res = await Request.get("/user");
};

const updateUserInfo = async () => {
    const res = await Request.post("/updateUserInfo?id=1", {
        username: "xiaohu",
    });
};

const uploadFile = async () => {
    const res = await Request.post(
        "/upload/files",
        {
            file: {
                type: postData.type,
                name: postData.fileName,
            },
        },
        { isFormData: true }
    );
};
