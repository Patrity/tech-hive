import axios from "axios";

export default defineEventHandler(async (event) => {

    let returnText = '';
    const body = await readBody(event);

    if (!body.name) {
        returnText = 'Invalid name';
    } else if (!body.email) {
        returnText = 'Invalid email';
    } else if (!body.message) {
        returnText = 'Invalid message';
    } else if (!body.subject) {
        returnText = 'Invalid subject';
    }
    if (returnText !== "") {
        throw createError(
            {
                status: 400,
                statusText: returnText,
            }
        );
    }
    await axios.post(process.env.WEBHOOK_URL, {
        "content": null,
        "embeds": [
            {
                "title": body.name,
                "description": body.email,
                "color": 3387667,
                "fields": [
                    {
                        "name": body.subject,
                        "value": body.message
                    }
                ]
            }
        ],
    }).then(r => {
        setResponseStatus(event, 200)
        return "Success";
    })
    return {
        status: 400,
        statusText: "Unknown Error",
    }
})