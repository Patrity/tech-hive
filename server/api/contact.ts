export default defineEventHandler((event) => {
    //check params
    let errorText = '';
    if (!event.params || !event.params.query ||) {
        errorText = 'Invalid params';
    } else if (!event.params.query.name) {
        errorText = 'Invalid name';
    } else if (!event.params.query.email) {
        errorText = 'Invalid email';
    } else if (!event.params.query.message) {
        errorText = 'Invalid message';
    } else if (!event.params.query.subject) {
        errorText = 'Invalid subject';
    }
})