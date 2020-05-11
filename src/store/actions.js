// import request from '../network/request'
export default {
    addTocar(context, payload) {
        let product = context.state.carlist.find(function (item) {
            return item.iid === payload.iid && item.sizeid === payload.sizeid && item.styleid === payload.styleid && item.stockid == payload.stockid
        })
        if (product) {
            context.commit("addCount", product)
            // console.log('++')

        } else {
            context.commit("addtocar", payload)
            // console.log('+1')
        }
    }
}