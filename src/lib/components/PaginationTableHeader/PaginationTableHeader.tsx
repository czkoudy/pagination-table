import { createElement, useContext } from 'react';
import { Box, Fade, Typography } from '@mui/material';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import SearchBox from '../SearchBox';

const PaginationTableHeader = () => {
  const table = useContext(PaginationTableContext);

  if (!table) return null;

  return (
    <Box
      sx={{
        display:
          !table.options.tableTitle &&
          !table.options.search.active &&
          table.selectionRows?.length <= 0
            ? 'none'
            : '',
        height: '30px',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: table.selectionRows?.length > 0 ? 'none' : 'flex',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        {table.selectionRows?.length <= 0 && table.options.tableTitle ? (
          <Typography sx={{ paddingLeft: '5px' }}>
            {table.options.tableTitle}
          </Typography>
        ) : (
          <span>&nbsp;</span>
        )}
        {table.options.search.active && <SearchBox />}
      </Box>

      {table.selectionRows?.length > 0 && (
        <Fade in unmountOnExit timeout={600}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor:
                table.options.selection.active &&
                table.selectionRows?.length > 0 &&
                table.options.selection.backgroundColor,
              display: 'flex',
              height: '100%',
              justifyContent: 'space-between',
              m: 0,
              pl: '10px',
              width: '100%',
            }}
          >
            <Typography>
              <strong>{table.selectionRows?.length}</strong> item selected
            </Typography>
            <Box>
              {table.options.selection?.buttons?.length > 0 &&
                table.selectionRows?.length > 0 &&
                table.options.selection?.buttons?.map((button, index) => {
                  return createElement(
                    button.component,
                    {
                      key: index,
                      style: {
                        // width: '40px',
                        height: '30px',
                        marginRight: '10px',
                      },
                      ...button.props,
                      onClick: () => {
                        button?.props?.onClick(table.selectionRows);
                        table.setSelectionRows([]);
                      },
                    },
                    typeof button?.label === 'object'
                      ? createElement(button.label, {
                          ...button.labelProps,
                        })
                      : typeof button?.label === 'string'
                        ? button.label
                        : `Button ${index}`
                  );
                })}
            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default PaginationTableHeader;
