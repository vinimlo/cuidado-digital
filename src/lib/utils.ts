export function formatDate(dateString: string) {
  const date = new Date(`${dateString}T03:00:00`);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatDescription(description: string, compromisedData: string[]) {

  const newCompromisedData = `<br /><br /><span><strong>Dados Comprometidos: </strong>${compromisedData.join(', ')}</span>`
  const newDescription = description.concat(newCompromisedData)

  return newDescription
}