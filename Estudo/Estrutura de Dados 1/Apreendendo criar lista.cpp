#include<stdio.h>
#include<stdlib.h>											// sizeof = Determina tamanho da memória a ser alocada
#include<math.h>											// malloc = Aloca a memória 
#include<string.h>											// elemento = nome da struct
#include<locale.h>											// Elemento = Tipo de variavel criada
																
// Criando struct
	struct Elemento{
			int num;
				// Declarando novo tipo	
				struct Elemento *prox;
	};
				// Identificando Tipo que foi criado
					typedef struct Elemento elemento;

	int tamanho;
	
	void inicia(elemento *LISTA);
	int vazia(elemento *LISTA);
	elemento *aloca(int num);
	void insere(elemento *LISTA, int valor);
	void imprime (elemento *LISTA);
	elemento *retira (elemento *lista);

int main()
{
	// Criando lista e alocando a memória para a LISTA
	elemento *LISTA = (elemento *)malloc(sizeof(elemento));
	
	inicia(LISTA);
	
	imprime(LISTA);
	printf("\n");
	insere(LISTA, 1);

	insere(LISTA, 2);
	
	insere(LISTA, 3);
	
	imprime(LISTA);
	printf("\n");
	retira(LISTA);
	
	imprime(LISTA);
}
		// Iniciar a lista identificar os campos NULL
	void inicia (elemento *lista){
		
		lista -> prox = NULL;
		tamanho = 0;
		
	}
		int vazia (elemento *lista){
			if(lista -> prox == NULL){
				return 1;
			}
				else{
					return 0;
				}
		}
			// Criar novo elemento
			elemento *aloca(int valor){
				
				elemento *novo = (elemento *)malloc(sizeof(elemento));
				
				novo -> num = valor;
				return novo;
			}
			
			// Inserir Tabela
			void insere (elemento *lista, int valor){
				
				elemento *novo = aloca(valor);
				
				elemento *cabeca = lista -> prox;
				
				lista -> prox = novo;
				
				novo ->prox = cabeca; tamanho++;
			}
			
			// Imprimir resultado na tela					tmp = temporario
			void imprime (elemento *lista){
				
				if(vazia(lista)){
					printf("Lista vazia\n");
					return;
				}
				
				elemento *tmp;
				tmp = lista -> prox;
				
					while(tmp != NULL){
						printf("%d\n", tmp -> num);
						tmp = tmp ->prox;
					}
			}
			
			// Excluir Elemento
			elemento *retira (elemento *lista){
				
				if (vazia(lista)){
					printf("Lista já esta vazia\n");
					return NULL;
				}
							
					elemento *tmp = lista -> prox;
					lista -> prox = tmp -> prox;
			}
			

