import { ItemContainer } from "./ContainerComponents/ItemContainer"
import { NavContainer } from "./ContainerComponents/NavContainer"

export const Container = () => {
  return (
    <section className="container">
        <h1>Condimentum consecteur</h1>
        <NavContainer/>
        <ItemContainer/>
    </section>
  )
}