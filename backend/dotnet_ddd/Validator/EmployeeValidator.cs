using dotnet_ddd.Models;
using FluentValidation;

namespace dotnet_ddd.Validator
{
    public class EmployeeValidator : AbstractValidator<Employee>
    {
        public EmployeeValidator()
        {
            RuleFor(x => x.Name).NotEmpty().Must(x => x.ToString().Length >= 4).WithMessage("Name must be at least 4 characters long.");
            RuleFor(x => x.Email).EmailAddress().WithMessage("Email is not valid");
            RuleFor(x => x.Phone).Must(x => x.ToString().Length == 7).WithMessage("Phone must have 7 digits");
            RuleFor(x => x.Salary).GreaterThan(10000).WithMessage("Salary must be greater than $10000");
            RuleFor(x => x.Department).NotEmpty().Must(x => x.ToString().Length >= 4).WithMessage("Department must be at least 4 characters long.");
        }

    }
}
