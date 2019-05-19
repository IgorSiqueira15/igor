package N2_19;

import javax.swing.JOptionPane;

public class resposta {
	public static void main(String[] args) {
		
		double r = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero: "));
		double pi = 3.14159;
		
		double diametro = 2 * r;
		double circunferencia = pi * ( r * r ); 
		double area = pi * (r * r);
		
		System.out.println("O diametro e: "+diametro);
		System.out.println("A circuferencia e: "+circunferencia);
		System.out.println("A area e: "+area);
	}
}
