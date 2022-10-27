import Request from "./index";

const fetchData = async () => {
    const res = await Request.get("/user");
};

const updateUserInfo = async () => {
    const res = await Request.post("/updateUserInfo?id=1", {
        username: "xiaohu",
    });
};

const uploadFile = async (formData) => {
    const res = await Request.post(
        "/upload/files",
        {
            file: {
                type: formData.type,
                name: formData.fileName,
            },
        },
        { isFormData: true }
    );
};
