export const formatCNPJ = (number: string) => {
  return number
    .replace(/\D/g, "") // Remove todos os caracteres que não são dígitos
    .slice(0, 14) // Limita o número de dígitos a 14 (sem formatação)
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,4})/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2"); // Formata o CNPJ completo (XX.XXX.XXX/XXXX-XX)
};
