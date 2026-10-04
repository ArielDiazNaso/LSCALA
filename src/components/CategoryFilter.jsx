import React from 'react';
import { categories } from '../data/products';
import { Search, X, SlidersHorizontal } from 'lucide-react';

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalResults
}) {
  return (
    <div className="w-full space-y-4">
      {/* Search Bar + Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#78716C]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por mueble, ambiente (mesa, silla, vajillero...)"
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-[#EAE4DC] text-sm text-[#1B1917] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#B58548] focus:ring-2 focus:ring-[#B58548]/15 transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#78716C] hover:text-[#1B1917]"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Counter of visible items */}
        <div className="flex items-center justify-between sm:justify-end text-xs text-[#78716C] px-1">
          <span className="font-medium text-[#44403C]">
            {totalResults === 1 ? '1 mueble encontrado' : `${totalResults} piezas en exhibición`}
          </span>
        </div>

      </div>

      {/* Horizontal Category Pills (Mobile Friendly) */}
      <div className="relative">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1B1917] text-[#FAF8F5] shadow-sm'
                    : 'bg-white hover:bg-[#F3EFE8] text-[#57534E] border border-[#EAE4DC]'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-[#FAF8F5]/20 text-white'
                      : 'bg-[#F4EFEA] text-[#78716C]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
