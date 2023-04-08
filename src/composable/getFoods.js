import { ref } from 'vue'

const getFoods = () => {
    const foods = ref([])
    const error = ref(null)

    const load = async() => {
        try {
            let data = await fetch('http://localhost:3000/foods')
            
            
            if(!data.ok){
                throw Error('no data avaible')
            
            }
            foods.value = await data.json()
        }
        catch(err) {
            error.value = err.message
            console.log(error.value);
        }
    }

    return{ foods, error, load}
}


export default getFoods