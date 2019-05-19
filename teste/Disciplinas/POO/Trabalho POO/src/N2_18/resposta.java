package N2_18;

import javax.swing.JOptionPane;

public class resposta {
	public static void main(String[] args) {
		
		int n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o Primeiro numero: "));
		int n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o Segundo numero: "));
		int n3 = Integer.parseInt(JOptionPane.showInputDialog("Digite o Terceiro numero: "));
		
		
		int soma = n1 + n2 + n3;
		int media = (n1 + n2 + n3) / 3;
		
		if (n1 > n2 && n1 > n3) {
			System.out.println("O maior número e: "+n1);
		}
		else if (n2 > n1 && n2 > n3) {
			System.out.println("O maior número e: "+n2);
		}
		else if (n3 > n2 && n3 > n1) {
			System.out.println("O maior número e: "+n3);
		}
		else {
			System.out.println("Os numeros são iguais");
		}
		
		System.out.println("A soma e: "+soma);
		System.out.println("A media e: "+media);
	}
}
