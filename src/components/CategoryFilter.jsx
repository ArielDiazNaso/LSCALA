import React from 'react';
import { categories } from '../data/products';
import { Search, X, SlidersHorizontal, Sparkles, Table, Armchair, Archive, Lamp, Sofa, CookingPot } from 'lucide-react';

const categoryIconMap = {
  todos: Sparkles,
  mesas: Table,
  sillas: Armchair,
  guardado: Archive,
  mesasdeluz: Lamp,
  sillones: Sofa,
  cocinas: CookingPot
};

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
      <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center justify-between">
        
        {/* Search Input with refined aesthetic */}
        <div className="relative flex-1 max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#B58548]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por mueble, estilo o ambiente (mesa, silla, vajillero, nórdico...)"
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-[#EAE4DC] text-sm text-[#1B1917] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#B58548] focus:ring-4 focus:ring-[#B58548]/10 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#78716C] hover:text-[#1B1917] cursor-pointer"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Counter & quick reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-[#78716C] px-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#EAE4DC] font-medium text-[#44403C] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B58548]" />
            {totalResults === 1 ? '1 mueble encontrado' : `${totalResults} piezas en exhibición`}
          </span>
          {(searchQuery || selectedCategory !== 'todos') && (
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                onSelectCategory('todos');
              }}
              className="text-xs font-semibold text-[#B58548] hover:text-[#996937] underline underline-offset-2 cursor-pointer"
            >
              Limpiar filtros
            </button>
          )}
        </div>

      </div>

      {/* Horizontal Category Pills with refined icons */}
      <div className="relative">
        <div className="flex items-center space-x-2.5 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = categoryIconMap[cat.id] || Sparkles;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1B1917] text-[#FAF8F5] shadow-md scale-102 ring-2 ring-[#B58548]/40'
                    : 'bg-white hover:bg-[#F3EFE8] text-[#57534E] hover:text-[#1B1917] border border-[#EAE4DC] shadow-2xs'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#CAA169]' : 'text-[#78716C]'}`} />
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
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
