package aplicacao;

import java.util.Scanner;

public class Principal {
		public static void main(String[] args) {
				Scanner entrada = new Scanner(System.in);
				
				System.out.println("Digite seu nome: ");
				String nome = entrada.nextLine();
				
				System.out.println("Digite sua idade: ");
				int idade = entrada.nextInt();
				entrada.nextLine();
				
				System.out.println("Olá, " + nome + "! Você tem " + 
				idade + " anos.");
				
				entrada.close();
			}
	}
