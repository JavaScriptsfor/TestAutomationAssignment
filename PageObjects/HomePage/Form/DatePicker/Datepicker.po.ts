import { formatDayWithLeadingZero } from "../../../utils/utility";
import { IDatePicker } from "./IDatepicker.in";

export class DatePicker implements IDatePicker {
    selectMonth(month: string) {
        cy.get('.react-datepicker__month-select').select(month).should('have.value', '0');
    }
    selectYear(year: any) {
        cy.get('.react-datepicker__year-select').select(`${year}`).should('have.value', '1990');
    }
    selectDay(day: any) {
        const formattedDay = formatDayWithLeadingZero(day);
        cy.get(`.react-datepicker__day--0${formattedDay}`).first().click({ multiple: true })
    }
    datePicker(year: number, month: string, day: string) {
        this.selectYear(year);
        this.selectMonth(month);
        this.selectDay(day);
    }

}