package aplicacao;

public class Principal {
	public static void main(String[] args) {
		
		Usuario user = new Usuario("Julio");
		Calculadora calc = new Calculadora();
		
		System.out.println("Usuário: " + user.getNome());
		System.out.println("Soma: " + calc.somar(10, 5));
	}
}
