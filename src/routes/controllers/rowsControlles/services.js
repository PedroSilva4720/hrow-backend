export const convertIntoPtBrDateFormat = oldDate => {
  if (new Date(oldDate)) {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }

    return oldDate.toLocaleDateString('pt-br', options)
  }
}
