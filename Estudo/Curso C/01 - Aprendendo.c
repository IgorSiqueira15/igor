#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<time.h>


main()

{
	
	// Cabeçalho Melhorado
	
        printf("\n\n");
        printf("          P  /_\\  P                              \n");
        printf("         /_\\_|_|_/_\\                            \n");
        printf("     n_n | ||. .|| | n_n         Bem vindo ao     \n");
        printf("     |_|_|nnnn nnnn|_|_|     Jogo de Adivinhação! \n");
        printf("    |\" \"  |  |_|  |\"  \" |                     \n");
        printf("    |_____| ' _ ' |_____|                         \n");
        printf("          \\__|_|__/                              \n");
        printf("\n\n");
	
	// Declarando variaveis que serão usadas
		
	int chute;
	int acertou = 0;
	int tentativas = 1;
	int nivel;
	int totaldetentativas;
	
	// Definindo a quantidade máxima de pontos
	
	double pontos = 1000;
	
	// Gerando o número secreto
	
	srand(time(0));
	int numerosecreto = rand() % 100;
	
	// Escolhendo a dificuldade do jogo
	
	printf("\n\n\t\t Qual o nivel de dificuldade ? \n");
	printf("\n\t\t (1) Facil (2) Medio (3) Dificil\n\n");
	printf("\n Escolha: ");
	scanf("%d", &nivel);
	
	switch(nivel) 
	{
		case 1:
		
		totaldetentativas = 20;
	break;

			case 2:
			
			totaldetentativas = 15;
		break;

				default:
				totaldetentativas = 6;
			break;
}

	// Loop principal do Jogo

	int i;
	
	for (i = 1; i <= totaldetentativas; i++)
	{
		
			printf("\n -> Tentativa %d de %d \n", i, totaldetentativas);
			
			printf("Chute um Numero: ");
			scanf("%d", &chute);
			
	// Caso o Jogador digite numero negativo
			
			if(chute < 0)
			{
				printf("\n Voce nao pode chutar numeros negativos \n");
				i--;
				
				continue;
			}
			
	// Verifica se jogador acertou			
				
		acertou = chute == numerosecreto;
					
		if(acertou)
			{
				break;
			}
				else if(chute > numerosecreto)
				{
			
					printf("\n\t\t Seu chute foi maior do que numero secreto \n\n");
				}
							else
							{
								printf("\n\t\t Seu chute foi menor do que o numero secreto \n\n");
							}
			
	// Calcula os Pontos do Jogador
		 	
			 double	pontosperdidos = abs(chute - numerosecreto) / (double)2;
			pontos = pontos - pontosperdidos;
			
	}	
	
	// Mensaguem de Vitória ou Derrota 
			if(acertou)
			{
			    printf("             OOOOOOOOOOO               \n");
                printf("         OOOOOOOOOOOOOOOOOOO           \n");
                printf("      OOOOOO  OOOOOOOOO  OOOOOO        \n");
                printf("    OOOOOO      OOOOO      OOOOOO      \n");
                printf("  OOOOOOOO  #   OOOOO  #   OOOOOOOO    \n");
                printf(" OOOOOOOOOO    OOOOOOO    OOOOOOOOOO   \n");
                printf("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  \n");
                printf("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  \n");
                printf("OOOO  OOOOOOOOOOOOOOOOOOOOOOOOO  OOOO  \n");
                printf(" OOOO  OOOOOOOOOOOOOOOOOOOOOOO  OOOO   \n");
                printf("  OOOO   OOOOOOOOOOOOOOOOOOOO  OOOO    \n");
                printf("    OOOOO   OOOOOOOOOOOOOOO   OOOO     \n");
                printf("      OOOOOO   OOOOOOOOO   OOOOOO      \n");
                printf("         OOOOOO         OOOOOO         \n");
                printf("             OOOOOOOOOOOO              \n");
                
                printf("\nParabéns! Voce acertou!\n");
                printf("\n TU E FODA CARA !!!! \n");
                printf("Você fez %.2f pontos. Ate a proxima!\n\n", pontos);
			}
			
				else
				{
					printf("       \\|/ ____ \\|/    \n");  
 					printf("        @~/ ,. \\~@      \n");  
 		     	    printf("       /_( \\__/ )_\\    \n");  
    			    printf("          \\__U_/        \n");
 
             		printf("\n Voce perdeu! Tente novamente!\n\n");
             		printf("\n TU E UMA MULA SEU BURRO !!! \n\n");
				}
	
		system("pause");
		system("cls");
	
	printf("\n\t\t Obrigado por jogar! \n");
	printf("\n\t\t Criador: Igor Bertoldo Siqueira \n");
	
	
	printf("\n\t\t Fim de Jogo \n");
	}


