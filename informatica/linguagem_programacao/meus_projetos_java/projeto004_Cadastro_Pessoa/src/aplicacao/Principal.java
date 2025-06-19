package aplicacao;

import java.util.Scanner;

public class Principal {
	public static void main(String[] args) {
			
			Scanner entrada = new Scanner(System.in);
			Pessoa p = new Pessoa();
			
			System.out.println("Digite seu nome: ");
			p.nome = entrada.nextLine();
			
			System.out.println("Digite sua idade");
			p.idade = entrada.nextInt();
			entrada.nextLine();
			
			System.out.println("Digite sua cidade: ");
			p.cidade = entrada.nextLine();
			
			System.out.println("\n--- DADOS CADASTRADOS ---");
			System.out.println("Nome: " + p.nome);
			System.out.println("idade: " + p.idade);
			System.out.println("Cidade: " + p.cidade);
			
			entrada.close();
		} 
	}
