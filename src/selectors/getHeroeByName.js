import {heroes} from '../data/heroes'

export const getheroesByName =(name='') => {
    if(name===''){
        return []
    }
    name= name.toLocaleLowerCase();
    return heroes.filter((hero)=>{
        return hero.superhero.toLocaleLowerCase().includes(name)})
}