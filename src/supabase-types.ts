export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent: {
        Row: {
          age_agent: number | null
          gere_maison: number | null
          id: number
          id_user: string | null
          nom_agent: string | null
          num_tel: string | null
          prenom_agent: string | null
        }
        Insert: {
          age_agent?: number | null
          gere_maison?: number | null
          id?: number
          id_user?: string | null
          nom_agent?: string | null
          num_tel?: string | null
          prenom_agent?: string | null
        }
        Update: {
          age_agent?: number | null
          gere_maison?: number | null
          id?: number
          id_user?: string | null
          nom_agent?: string | null
          num_tel?: string | null
          prenom_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_gere_maison_fkey"
            columns: ["gere_maison"]
            isOneToOne: false
            referencedRelation: "Maisons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_agent_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      commune: {
        Row: {
          code_postale: number | null
          id: number
          nom_commune: string | null
        }
        Insert: {
          code_postale?: number | null
          id?: number
          nom_commune?: string | null
        }
        Update: {
          code_postale?: number | null
          id?: number
          nom_commune?: string | null
        }
        Relationships: []
      }
      Maisons: {
        Row: {
          adresse: string | null
          commune: number | null
          favori: boolean | null
          id: number
          image: string | null
          nbrChambres: number | null
          nbrSdb: number | null
          nomMaison: string | null
          prix: number | null
          quartier: number | null
          surface: number | null
        }
        Insert: {
          adresse?: string | null
          commune?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSdb?: number | null
          nomMaison?: string | null
          prix?: number | null
          quartier?: number | null
          surface?: number | null
        }
        Update: {
          adresse?: string | null
          commune?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSdb?: number | null
          nomMaison?: string | null
          prix?: number | null
          quartier?: number | null
          surface?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Maisons_commune_fkey"
            columns: ["commune"]
            isOneToOne: false
            referencedRelation: "commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Maisons_commune_fkey"
            columns: ["commune"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Maisons_quartier_fkey"
            columns: ["quartier"]
            isOneToOne: false
            referencedRelation: "quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Maisons_quartier_fkey"
            columns: ["quartier"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["id_quartier"]
          }
        ]
      }
      quartier: {
        Row: {
          id: number
          id_Commune: number | null
          nom_quartier: string | null
        }
        Insert: {
          id?: number
          id_Commune?: number | null
          nom_quartier?: string | null
        }
        Update: {
          id?: number
          id_Commune?: number | null
          nom_quartier?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      quartiercommune: {
        Row: {
          id: number | null
          id_quartier: number | null
          nom_commune: string | null
          nom_quartier: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
