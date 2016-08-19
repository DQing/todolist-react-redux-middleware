import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD') {
        request.post('/todo')
            .send({text: action.text})
            .end((err, res) => {
                next({type: 'GETTODOS', todos: res.body})
            });
    }
    else
        next(action);
};