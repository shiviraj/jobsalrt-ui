const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const formatDate = (dateInput) => {
  const date = new Date(dateInput)
  return `${months[date.getMonth()]} ${(date.getDate())}, ${(date.getFullYear())}`
}
export {formatDate}
