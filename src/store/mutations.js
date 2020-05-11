export default {
    getinfo(state, info) {
        let infos = JSON.stringify(info)
        window.sessionStorage.setItem('goodsinfo', infos)
        state.goodsinfo = info
    },
    addtocar(state,payload){
        payload.count = 1
        state.carlist.push(payload)
    },
    addCount(state,payload){
        payload.count++
    },
    jianCount(state,payload){
        if(payload.count<=1){
            alert('不能再减了')
            payload.count = 1
        }else{
            payload.count--
        }
    },
    deletegoods(state,index){
        state.carlist.splice(index,1)
    }
}