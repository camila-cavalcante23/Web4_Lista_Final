namespace lista_backend.Models
{
    public class Task
    {
        public long Id { get; set; }
        public string? Texto { get; set; }
        public string? Prazo { get; set; }
        public string? Prioridade { get; set; }
        public bool Concluida { get; set; }
    }
}
