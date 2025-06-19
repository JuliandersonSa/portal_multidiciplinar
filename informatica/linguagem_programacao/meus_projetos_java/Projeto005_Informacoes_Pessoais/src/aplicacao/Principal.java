package aplicacao;

import java.util.Scanner;
import java.util.Locale;

public class Principal {
		public static void main(String[] args) {
			Locale.setDefault(Locale.US);
			Scanner entrada = new Scanner(System.in);
			
			System.out.println("Digite seu nome: ");
			String nome = entrada.nextLine();
			
			System.out.println("Digite sua idade: ");
			int idade = entrada.nextInt();
			entrada.nextLine();
			
			System.out.println("Digite sua altura: ");
			double altura = entrada.nextDouble();
			entrada.nextLine();
			
			System.out.println("Digite seu gênero (M/F): ");
			char genero = entrada.next().toUpperCase().charAt(0);
			entrada.nextLine();
			
			System.out.println("Você é estudante? (S/N): ");
			String estudante = entrada.nextLine();
			boolean isEstudante = estudante.equalsIgnoreCase("s");
			
			System.out.println("\n--- RESUMO ---");
			System.out.println("Nome: " + nome);
			System.out.println("idade: " + idade);
			System.out.println("Altura: " + altura);
			System.out.println("Gênero: " + genero);
			System.out.println("Estudante: " + isEstudante);
			
			entrada.close();
			}
	}
