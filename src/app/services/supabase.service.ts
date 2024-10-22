import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Product } from '../interfaces/product';
import { from, Observable } from 'rxjs';

const supabaseUrl = 'https://jwaihcbgmtkmrduwxypv.supabase.co/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3YWloY2JnbXRrbXJkdXd4eXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MjMxMjQsImV4cCI6MjA0NTE5OTEyNH0.4uII3TgRokbJud1mtllp0mc3XrCy-aj10gCCh-Ru-mc';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase = createClient(supabaseUrl, supabaseAnonKey);

  constructor() {}

  getProducts(): Observable<Product[]> {
    return from(
      this.supabase
        .from('products')
        .select('*')
        .then(({ data, error }) => {
          if (error) {
            console.error('Error fetching products:', error);
            return [];
          }
          return data as Product[];
        })
    );
  }

  getProductById(id: number): Observable<Product | null> {
    return from(
      this.supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.error('Error fetching product:', error);
            return null;
          }
          return data as Product;
        })
    );
  }
}
