/**
 * Utility class for date operations
 */
class DateUtils {
    /**
     * Returns today's date in ISO format (YYYY-MM-DD)
     * @returns {string} Today's date
     */
    getToday() {
        const today = new Date();
        return this.formatDateAsISOString(today);
    }

    /**
     * Returns tomorrow's date in ISO format (YYYY-MM-DD)
     * @returns {string} Tomorrow's date
     */
    getTomorrow() {
        return this.getDateWithOffset(1);
    }

    /**
     * Returns yesterday's date in ISO format (YYYY-MM-DD)
     * @returns {string} Yesterday's date
     */
    getYesterday() {
        return this.getDateWithOffset(-1);
    }

    /**
     * Returns the date for the same day next week in ISO format (YYYY-MM-DD)
     * @returns {string} Date for the same day next week
     * */

    getNextWeek() {
        const nextWeek = this.getDateObjectWithOffset(7);
        return this.formatDateAsISOString(nextWeek);
    }

    /**
     * Returns the day of week for tomorrow (0-6)
     * @returns {number} Day of week for tomorrow
     */
    getTomorrowDay() {
        const tomorrow = this.getDateObjectWithOffset(1);
        return tomorrow.getDate();
    }

    /**
     * Returns the day of week for next week's same day (0-6)
     * @returns {number} Day of week for next week
     */
    getNextWeekDay() {
        const nextWeek = this.getDateObjectWithOffset(7);
        return nextWeek.getDate();
    }

    /**
     * Helper method to get a date with specified offset
     * @param {number} offset - Days to add/subtract from today
     * @returns {string} Formatted date as YYYY-MM-DD
     * @private
     */
    getDateWithOffset(offset) {
        const date = this.getDateObjectWithOffset(offset);
        return this.formatDateAsISOString(date);
    }

    /**
     * Helper method to get a Date object with specified offset
     * @param {number} offset - Days to add/subtract from today
     * @returns {Date} Date object with applied offset
     * @private
     */
    getDateObjectWithOffset(offset) {
        const today = new Date();
        const date = new Date(today);
        date.setDate(date.getDate() + offset);
        return date;
    }

    /**
     * Formats a date as ISO string and extracts the date part
     * @param {Date} date - Date to format
     * @returns {string} Formatted date as YYYY-MM-DDTHH:MM
     * @private
     */
    formatDateAsISOString(date) {
        return date.toISOString().split('T')[0] + 'T00:00';
    }
}

// Create a singleton instance
export const dateUtils = new DateUtils();