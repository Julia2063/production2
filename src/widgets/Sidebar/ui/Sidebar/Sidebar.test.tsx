import  { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation"

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test toggle', () => {
        renderWithTranslation(<Sidebar />)
        const toggleButton = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()

        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})