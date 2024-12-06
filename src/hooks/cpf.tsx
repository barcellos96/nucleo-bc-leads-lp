export const formatCPF = (number: string) => {
  return number
    .replace(/\D/g, "") // Remove todos os caracteres que não são dígitos
    .slice(0, 11) // Limita o número de dígitos a 11 (sem formatação)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Formata com CPF completo (XXX.XXX.XXX-XX)
};
