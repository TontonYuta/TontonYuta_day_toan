import React, { useEffect, useRef } from 'react';

interface MathTextProps {
  content: string;
  className?: string;
  block?: boolean; // If true, renders as full width paragraphs. If false, renders inline.
}

declare global {
  interface Window {
    katex: any;
  }
}

/**
 * A lightweight component to render Markdown-like text mixed with LaTeX math.
 * Supports:
 * - LaTeX wrapped in $...$
 * - Headers ###
 * - Bold **text**
 * - Lists - item
 * - Newlines
 */
const MathText: React.FC<MathTextProps> = ({ content, className = "", block = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to render LaTeX inside a string
  const renderMathInString = (text: string) => {
    // Split by $...$ to find math segments
    // Regex captures the delimiters to keep them in the array
    const parts = text.split(/(\$[^$]+\$)/g);

    return parts.map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        // It's math
        const latex = part.slice(1, -1);
        try {
          if (window.katex) {
             const html = window.katex.renderToString(latex, {
               throwOnError: false,
               displayMode: false,
             });
             return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
          }
          return <span key={index} className="font-mono text-blue-600">{part}</span>;
        } catch (e) {
          return <span key={index} className="text-red-500">{part}</span>;
        }
      } else {
        // It's text, handle Bold (**...**)
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={index}>
            {boldParts.map((subPart, subIndex) => {
              if (subPart.startsWith('**') && subPart.endsWith('**')) {
                return <strong key={subIndex}>{subPart.slice(2, -2)}</strong>;
              }
              return <span key={subIndex}>{subPart}</span>;
            })}
          </span>
        );
      }
    });
  };

  if (!block) {
    // Simple inline rendering (for options, short sentences)
    // Changed from div to span to prevent invalid HTML when used inside buttons
    return <span className={className}>{renderMathInString(content)}</span>;
  }

  // Block rendering (for Theory, Essays) - Process line by line
  const lines = content.split('\n');
  
  return (
    <div className={`space-y-3 text-gray-800 ${className}`} ref={containerRef}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-2"></div>; // Spacer for double newlines

        // Headers (###)
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={idx} className="text-xl font-bold text-blue-800 mt-6 mb-2 border-b border-blue-100 pb-2">
              {renderMathInString(trimmed.substring(4))}
            </h3>
          );
        }

        // List items (- )
        if (trimmed.startsWith('- ')) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-4">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <div className="leading-relaxed">{renderMathInString(trimmed.substring(2))}</div>
            </div>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="leading-relaxed">
            {renderMathInString(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

export default MathText;