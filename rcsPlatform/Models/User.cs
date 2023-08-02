namespace rcsPlatform.Models
{
    public class User
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        public string Password { get; set; }
    
    {
        public int Id { get; set; }
        public string Name { get; set; }
        // Additional properties for other columns
    }
}
